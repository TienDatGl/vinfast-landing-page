// server/api/sendMail.ts

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { default: transporter } = await import('@/server/utils/sendMail.cjs')

const mailOptions = {
  from: '"Vinfast Đà Nẵng Mail Server" <your_email@gmail.com>',
  to: process.env.GMAIL_RECEIVER,
  subject: 'Yêu cầu báo giá / lái thử xe',
  html: `
    <div style="background-color: #f0f2f5; padding: 40px 20px; font-family: 'Segoe UI', Arial, sans-serif;">
      <div style="max-width: 600px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); overflow: hidden;">

        <!-- Header Logo -->
        <div style="background-color: #d3d3d3; text-align: center; padding: 30px 20px;">
          <img src="https://res.cloudinary.com/dypj5qjdg/image/upload/v1752674778/VinFast-logo-new_NO_20Tagline_20-_203D_20-_20Center-1st-priority_iqfpgl.png" alt="Vinfast Đà Nẵng" style="max-width: 150px; height: auto;" />
        </div>

        <!-- Title -->
        <div style="padding: 30px 20px 10px 20px; text-align: center;">
          <h2 style="color: #002f6c; font-size: 22px; margin-bottom: 10px;">Khách hàng yêu cầu báo giá / lái thử</h2>
          <p style="font-size: 15px; color: #555;">Thông tin chi tiết của khách hàng được gửi từ website của bạn</p>
        </div>

        <!-- Info Table -->
        <div style="padding: 0 30px 30px 30px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 16px;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; width: 40%; color: #333;">Họ tên:</td>
              <td style="padding: 10px 0; color: #555;">${body.name}</td>
            </tr>
            <tr style="border-top: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Số điện thoại:</td>
              <td style="padding: 10px 0; color: #555;">${body.phone}</td>
            </tr>
            <tr style="border-top: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Mẫu xe quan tâm:</td>
              <td style="padding: 10px 0; color: #555;">${body.carModel}</td>
            </tr>
            <tr style="border-top: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; color: #333;">Hình thức thanh toán:</td>
              <td style="padding: 10px 0; color: #555;">${body.paymentMethod}</td>
            </tr>
          </table>

          <!-- CTA Button -->
          <div style="text-align: center; margin-top: 30px;">
            <a href="tel:${body.phone}" style="background-color: #007bff; color: white; padding: 14px 28px; border-radius: 30px; text-decoration: none; font-weight: 600; display: inline-block; transition: background 0.3s;">
              📞 Gọi lại khách hàng ngay
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #f9f9f9; padding: 20px 30px; text-align: center; font-size: 13px; color: #999;">
          Email này được gửi tự động từ hệ thống Ô tô Vinfast Đà Nẵng.<br>
          Vui lòng không trả lời lại email này.
        </div>
      </div>
    </div>
  `
}

  try {
    await transporter.sendMail(mailOptions)
    return { success: true }
  } catch (error) {
    console.error('Gửi email lỗi:', error)
    return { success: false }
  }
})
