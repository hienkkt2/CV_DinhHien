
import { Skill, CaseStudy, ServicePrice, ProjectSample } from './types';

export const SKILLS: Skill[] = [
  { name: 'Digital Marketing tổng thể', icon: '📊' },
  { name: 'Content Facebook/Zalo chuẩn CTA', icon: '✍️' },
  { name: 'Quản trị fanpage & Inbox', icon: '📱' },
  { name: 'Facebook Ads tối ưu', icon: '🎯' },
  { name: 'SEO Content & Website', icon: '🔍' },
  { name: 'WordPress & Landing Page', icon: '💻' },
  { name: 'Tracking & Analytics cơ bản', icon: '📈' },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'Case 1: Fanpage Bán Hàng',
    problem: 'Fanpage ít tương tác, không có inbox khách hàng.',
    solution: [
      'Tối ưu lại nội dung fanpage chuyên nghiệp',
      'Viết content bán hàng chuẩn CTA (Call to Action)',
      'Lên lịch đăng bài đều đặn thu hút người dùng'
    ],
    result: [
      'Tăng tương tác tự nhiên đáng kể',
      'Bắt đầu có inbox khách hàng ổn định hàng ngày'
    ]
  },
  {
    title: 'Case 2: Website Giới Thiệu & Thu Khách',
    problem: 'Cần website giới thiệu doanh nghiệp và thu lead hiệu quả.',
    solution: [
      'Thiết kế website WordPress chuẩn UI/UX',
      'Setup form liên hệ & Zalo chat trực tuyến',
      'Tối ưu hiển thị đa thiết bị (Mobile/Tablet)'
    ],
    result: [
      'Website vận hành mượt mà, chuyên nghiệp',
      'Dễ dàng quản trị và mở rộng tính năng về sau'
    ]
  },
  {
    title: 'Case 3: Tối ưu SEO & Phủ sóng Google',
    problem: 'Website không có traffic tự nhiên, khách hàng không tìm thấy thương hiệu trên Google.',
    solution: [
      'Phân tích bộ từ khóa mục tiêu và đối thủ cạnh tranh',
      'Tối ưu Technical SEO & Cấu trúc dữ liệu website',
      'Xây dựng hệ thống Content chuẩn SEO chuyên sâu'
    ],
    result: [
      'Tăng 250% lượt truy cập tự nhiên sau 3 tháng',
      'Hơn 30 từ khóa ngành lọt Top 1-5 Google Search'
    ]
  }
];

export const SERVICES: ServicePrice[] = [
  {
    name: 'Quản trị Fanpage & Content',
    description: 'Phát triển thương hiệu và tạo nội dung tương tác.',
    features: [
      'Tối ưu Fanpage toàn diện',
      'Kế hoạch nội dung theo tháng',
      '12–20 bài viết chuẩn SEO/CTA',
      'Chăm sóc inbox cơ bản',
      'Báo cáo hiệu quả định kỳ'
    ],
    price: '3.000.000 – 5.000.000 VNĐ / tháng'
  },
  {
    name: 'Thiết kế Website / Landing Page',
    description: 'Xây dựng bộ mặt chuyên nghiệp trên Internet.',
    features: [
      'Tư vấn cấu trúc & Giao diện',
      'Cài đặt CMS WordPress',
      'Thiết kế trang Dịch vụ/Sản phẩm',
      'Tích hợp Zalo, Form, Tracking',
      'Hướng dẫn quản trị chi tiết'
    ],
    price: '2.500.000 – 6.000.000 VNĐ'
  },
  {
    name: 'SEO Website Tổng Thể',
    description: 'Đưa website lên top tìm kiếm Google.',
    features: [
      'Phân tích từ khóa đối thủ',
      'Viết bài chuẩn SEO chuyên sâu',
      'Tối ưu kỹ thuật On-page',
      'Xây dựng backlink an toàn',
      'Cam kết thứ hạng & Traffic'
    ],
    price: 'Từ 3.000.000 VNĐ / tháng'
  },
  {
    name: 'Facebook Ads & Combo',
    description: 'Thúc đẩy doanh số nhanh chóng và bền vững.',
    features: [
      'Setup & Tối ưu quảng cáo',
      'Viết nội dung Ads thu hút',
      'Combo Marketing + Website',
      'Tư vấn chiến lược tổng thể',
      'Minh bạch ngân sách & kết quả'
    ],
    price: '1.500.000 – 12.000.000 VNĐ / tháng'
  }
];

export const PROJECT_SAMPLES: ProjectSample[] = [
  { type: 'Website', name: 'Website Doanh nghiệp', status: 'Đang cập nhật link' },
  { type: 'Landing Page', name: 'Landing Page Bán hàng', status: 'Đang cập nhật link' },
  { type: 'Content', name: 'Mẫu bài viết Fanpage', status: 'Đính kèm ảnh/link' }
];
