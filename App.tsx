
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  Smartphone, 
  Code, 
  Megaphone,
  Briefcase,
  Layout,
  Target,
  Menu,
  X,
  Zap,
  Star,
  Layers,
  Award
} from 'lucide-react';
import { SKILLS, CASE_STUDIES, SERVICES, PROJECT_SAMPLES } from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Kỹ năng', href: '#skills' },
    { name: 'Dự án', href: '#portfolio' },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const getCaseImage = (index: number) => {
    const images = [
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    ];
    return images[index] || images[0];
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Decor */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-50/50 rounded-full blur-[120px]"></div>
        <div className="absolute top-[30%] left-[20%] w-[10%] h-[10%] bg-blue-100/30 rounded-full blur-[60px]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'glass-nav py-3 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={(e) => handleNavClick(e as any, '#about')}>
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform">
              <span className="text-white font-black text-xl">H</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">
              Đình Hiển
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 hover:text-blue-600 text-sm font-bold tracking-wide transition-all relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:0943304685" 
              className="bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition-all shadow-xl hover:shadow-blue-200 active:scale-95"
            >
              Liên hệ ngay
            </a>
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white border-b border-slate-100 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 border-t' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-6 pt-4 pb-8 space-y-3">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="block py-4 text-xl font-bold text-slate-900 border-b border-slate-50 last:border-0" 
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6">
              <a 
                href="tel:0943304685" 
                className="w-full flex justify-center bg-blue-600 text-white py-4 rounded-2xl font-bold shadow-lg"
              >
                094 330 4685
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="about" className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-6">
          <div className="max-w-7xl mx-auto lg:px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-3/5 text-center lg:text-left z-10">
                <div className="inline-flex items-center px-5 py-2 rounded-full text-xs font-black bg-blue-50 text-blue-700 mb-8 border border-blue-100 uppercase tracking-widest animate-fade-in">
                  <span className="relative flex h-2 w-2 mr-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  Digital Specialist • Remote
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-[900] tracking-tighter text-slate-900 mb-8 leading-[1.05]">
                  Chuyên Gia <br/>
                  <span className="text-gradient">Tăng Trưởng Số</span>
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-2xl mx-auto lg:mx-0 font-medium">
                  Đồng hành cùng SME xây dựng hệ thống Marketing Online tinh gọn, 
                  tối ưu chi phí và bùng nổ doanh thu thực tế qua nền tảng đa kênh.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
                  <a 
                    href="#portfolio" 
                    onClick={(e) => handleNavClick(e, '#portfolio')}
                    className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-2xl font-extrabold text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center justify-center group"
                  >
                    Xem Dự Án <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a 
                    href="https://zalo.me/0943304685" 
                    target="_blank"
                    className="w-full sm:w-auto bg-white border-2 border-slate-100 text-slate-700 px-10 py-5 rounded-2xl font-extrabold text-lg hover:border-blue-200 hover:text-blue-600 transition-all flex items-center justify-center shadow-lg shadow-slate-50"
                  >
                    Tư vấn Zalo
                  </a>
                </div>
                
                <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-10 opacity-40">
                  <div className="flex items-center gap-3"><Layers className="w-5 h-5" /><span className="text-sm font-bold uppercase tracking-wider">Multi-Platform</span></div>
                  <div className="flex items-center gap-3"><Zap className="w-5 h-5" /><span className="text-sm font-bold uppercase tracking-wider">High Speed</span></div>
                  <div className="flex items-center gap-3"><Award className="w-5 h-5" /><span className="text-sm font-bold uppercase tracking-wider">Result Driven</span></div>
                </div>
              </div>
              <div className="hidden lg:flex lg:w-2/5 justify-center relative">
                <div className="relative z-10 animate-float">
                  <img 
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800" 
                    alt="Hien Portfolio" 
                    className="rounded-[3rem] shadow-2xl object-cover w-full h-[600px] border-[16px] border-white ring-1 ring-slate-100"
                  />
                  {/* Floating badges */}
                  <div className="absolute top-10 -left-12 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"><Zap className="text-white w-5 h-5" /></div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">ROI Increase</div>
                      <div className="text-lg font-black text-slate-900">+150%</div>
                    </div>
                  </div>
                  <div className="absolute bottom-10 -right-12 bg-white p-5 rounded-3xl shadow-2xl flex items-center gap-4 animate-bounce duration-[2000ms]">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center"><Code className="text-white w-5 h-5" /></div>
                    <div>
                      <div className="text-xs text-slate-400 font-bold uppercase">Optimized</div>
                      <div className="text-lg font-black text-slate-900">Web Vitals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Expertise Grid */}
        <section className="py-24 bg-slate-50/50 bg-grid">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/80 backdrop-blur-md p-12 rounded-[3rem] border border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.03)] group hover:shadow-blue-100 transition-all duration-500">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                  <Briefcase className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">Chuyên Môn Tổng Thể</h3>
                <ul className="space-y-6">
                  {[
                    "Xây dựng hệ thống online tạo khách hàng thực tế",
                    "Tối ưu chi phí & vận hành quy trình bài bản",
                    "Cam kết KPI & Minh bạch báo cáo kết quả"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group/li">
                      <div className="w-7 h-7 bg-green-50 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/li:bg-green-500 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-green-500 group-hover/li:text-white transition-colors" />
                      </div>
                      <span className="text-slate-600 font-semibold text-lg leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/80 backdrop-blur-md p-12 rounded-[3rem] border border-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.03)] group hover:shadow-indigo-100 transition-all duration-500">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
                  <Target className="text-white w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6">Cam Kết Hợp Tác</h3>
                <ul className="space-y-6">
                  {[
                    "Làm việc Remote / Full-time toàn quốc",
                    "Đồng hành lâu dài - Hiệu quả thực tế",
                    "Tư duy chiến lược - Thực thi tốc độ"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group/li">
                      <div className="w-7 h-7 bg-indigo-50 rounded-full flex items-center justify-center mr-4 mt-1 group-hover/li:bg-indigo-600 transition-colors">
                        <CheckCircle2 className="w-4 h-4 text-indigo-500 group-hover/li:text-white transition-colors" />
                      </div>
                      <span className="text-slate-600 font-semibold text-lg leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-white px-6">
          <div className="max-w-7xl mx-auto lg:px-6">
            <div className="text-center mb-24">
              <span className="text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">My Arsenal</span>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Thế Mạnh Kỹ Năng</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-xl font-medium">Hệ sinh thái kỹ năng hỗ trợ chuyển đổi số toàn diện cho doanh nghiệp.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {SKILLS.map((skill, index) => (
                <div key={index} className="bg-slate-50/50 p-10 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-slate-100 transition-all group flex flex-col items-center text-center">
                  <div className="text-5xl mb-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 bg-white w-20 h-20 flex items-center justify-center rounded-3xl shadow-sm">{skill.icon}</div>
                  <h4 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio / Case Studies Section */}
        <section id="portfolio" className="py-32 bg-slate-50/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <div className="text-center md:text-left">
                <span className="text-indigo-600 font-black tracking-widest text-xs uppercase bg-indigo-50 px-4 py-2 rounded-full mb-4 inline-block">Real Impact</span>
                <h2 className="text-5xl lg:text-6xl font-black text-slate-900 tracking-tight">Case Studies</h2>
              </div>
              <p className="text-slate-400 max-w-md text-lg font-medium text-center md:text-right italic">Những giải pháp thực tế mang lại kết quả bứt phá cho khách hàng.</p>
            </div>

            <div className="space-y-40">
              {CASE_STUDIES.map((study, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`flex flex-col lg:flex-row gap-16 lg:items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="w-full lg:w-1/2">
                      <div className="relative group">
                        <div className="absolute inset-0 bg-blue-600/10 rounded-[3rem] translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                        <img 
                          src={getCaseImage(index)} 
                          className="relative rounded-[3rem] shadow-2xl w-full h-[500px] object-cover border-4 border-white z-10 grayscale hover:grayscale-0 transition-all duration-700" 
                          alt={study.title} 
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="space-y-10">
                        <div>
                          <div className="text-blue-600 font-black mb-6 flex items-center gap-4">
                            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
                            <span className="text-xs uppercase tracking-[0.3em]">Success Story 0{index + 1}</span>
                          </div>
                          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight">{study.title}</h3>
                        </div>
                        
                        <div className="p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm relative group overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-red-50/50 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform"></div>
                           <h4 className="text-xs font-black text-red-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                             Thách thức hiện tại
                           </h4>
                           <p className="text-slate-600 text-xl font-medium leading-relaxed relative z-10">{study.problem}</p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                          <div className="space-y-4">
                            <h4 className="text-xs font-black text-blue-600 uppercase tracking-widest mb-4">Giải pháp tối ưu</h4>
                            <ul className="space-y-3">
                              {study.solution.map((item, i) => (
                                <li key={i} className="text-sm font-bold text-slate-500 flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 shrink-0"></div>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4 p-6 bg-green-50/30 rounded-3xl border border-green-100">
                            <h4 className="text-xs font-black text-green-600 uppercase tracking-widest mb-4">Kết quả bứt phá</h4>
                            <ul className="space-y-3">
                              {study.result.map((item, i) => (
                                <li key={i} className="text-sm font-black text-slate-800 flex items-start gap-3">
                                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing & Services */}
        <section id="services" className="py-32 bg-white px-6">
          <div className="max-w-7xl mx-auto lg:px-6">
            <div className="text-center mb-24">
              <span className="text-blue-600 font-black tracking-widest text-xs uppercase bg-blue-50 px-4 py-2 rounded-full mb-4 inline-block">Investment Plans</span>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Dịch Vụ & Báo Giá</h2>
              <p className="text-slate-400 max-w-xl mx-auto text-xl font-medium">Lựa chọn gói giải pháp linh hoạt phù hợp với quy mô doanh nghiệp.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="group relative">
                   <div className="absolute inset-0 bg-slate-900 rounded-[3rem] translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                   <div className="relative bg-slate-50 p-12 rounded-[3rem] border border-slate-100 group-hover:bg-white group-hover:-translate-y-2 transition-all duration-500 flex flex-col h-full shadow-lg shadow-slate-50 group-hover:shadow-2xl group-hover:shadow-slate-200">
                      <div className="mb-10">
                        <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.name}</h3>
                        <p className="text-slate-500 italic text-base leading-relaxed font-medium">{service.description}</p>
                      </div>
                      <ul className="space-y-5 mb-12 flex-grow">
                        {service.features.map((feat, i) => (
                          <li key={i} className="flex items-center text-slate-600 font-bold leading-relaxed">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-10 border-t border-slate-200">
                        <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Mức đầu tư dự kiến</div>
                        <div className="text-3xl font-[900] text-slate-900">{service.price}</div>
                      </div>
                   </div>
                </div>
              ))}
            </div>

            {/* Premium Combo */}
            <div className="mt-24 p-1.5 bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-900 rounded-[4rem] shadow-3xl shadow-blue-100 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[80px] -translate-x-10 -translate-y-20"></div>
              <div className="bg-white/5 backdrop-blur-2xl p-12 lg:p-20 rounded-[3.8rem] flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
                <div className="max-w-2xl text-center lg:text-left text-white">
                  <div className="bg-white/20 px-5 py-2 rounded-full inline-block text-xs font-black uppercase tracking-widest mb-8">All-In-One Solution</div>
                  <h3 className="text-4xl lg:text-6xl font-[900] mb-8 leading-tight">Combo Marketing <br/> + Website</h3>
                  <p className="text-blue-100 leading-relaxed text-xl font-medium opacity-90">
                    Giải pháp tổng lực cho doanh nghiệp mới. Tôi xây dựng toàn bộ hệ thống từ Website, Nội dung đến Quảng cáo - Đồng hành tư vấn vận hành trọn đời.
                  </p>
                </div>
                <div className="text-center lg:text-right shrink-0 bg-white/10 p-12 rounded-[3rem] border border-white/20 backdrop-blur-md">
                  <div className="text-sm font-black text-blue-200 uppercase tracking-[0.4em] mb-4">Gói cao cấp nhất</div>
                  <div className="text-5xl lg:text-7xl font-[1000] text-white mb-10 leading-none">6M - 12M <br/> <span className="text-2xl font-bold opacity-60">/ tháng</span></div>
                  <a 
                    href="https://zalo.me/0943304685" 
                    className="inline-block bg-white text-blue-700 px-14 py-6 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95"
                  >
                    Bắt đầu ngay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Process Section */}
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 bg-grid opacity-[0.03]"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
            <div className="text-center mb-24">
              <span className="text-blue-400 font-black tracking-widest text-xs uppercase mb-4 inline-block tracking-[0.4em]">Workflow</span>
              <h2 className="text-5xl lg:text-6xl font-black mb-6 tracking-tight">Quy Trình Cộng Tác</h2>
            </div>
            <div className="grid sm:grid-cols-5 gap-12 text-center">
              {[
                { step: '01', title: 'Phân tích', desc: 'Thấu hiểu nhu cầu & đặc thù' },
                { step: '02', title: 'Đề xuất', desc: 'Lên giải pháp & báo giá' },
                { step: '03', title: 'Triển khai', desc: 'Thực thi cam kết tiến độ' },
                { step: '04', title: 'Báo cáo', desc: 'Cập nhật chỉ số định kỳ' },
                { step: '05', title: 'Vận hành', desc: 'Đồng hành tối ưu lâu dài' }
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="text-8xl font-black text-white/[0.03] absolute -top-12 left-1/2 -translate-x-1/2 group-hover:text-blue-500/[0.08] transition-all duration-700">{item.step}</div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all group-hover:-translate-y-2">
                      <span className="text-xl font-black">{item.step}</span>
                    </div>
                    <h4 className="text-2xl font-black mb-4">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-semibold leading-relaxed group-hover:text-slate-300 transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA / Contact */}
        <section id="contact" className="py-40 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-5xl lg:text-8xl font-[1000] text-slate-900 mb-16 tracking-tighter leading-none">Cùng Hiển <br/> <span className="text-gradient">Bứt Phá</span> Doanh Thu?</h2>
            
            <div className="relative group">
               <div className="absolute inset-0 bg-blue-600 rounded-[4rem] blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
               <div className="relative bg-slate-50 p-12 lg:p-20 rounded-[4rem] border border-slate-100 shadow-xl overflow-hidden">
                <div className="grid sm:grid-cols-2 gap-10 relative z-10">
                  <a href="tel:0943304685" className="flex flex-col items-center p-12 bg-white rounded-[3rem] hover:shadow-2xl hover:-translate-y-2 transition-all group/item">
                    <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform">
                      <Phone className="w-10 h-10 text-blue-600" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-900 mb-2">094 330 4685</span>
                    <span className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">Gọi ngay tư vấn</span>
                  </a>
                  <a href="https://zalo.me/0943304685" target="_blank" className="flex flex-col items-center p-12 bg-white rounded-[3rem] hover:shadow-2xl hover:-translate-y-2 transition-all group/item">
                    <div className="w-24 h-24 bg-blue-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover/item:scale-110 group-hover/item:rotate-6 transition-transform">
                      <Smartphone className="w-10 h-10 text-blue-600" />
                    </div>
                    <span className="text-3xl font-[900] text-slate-900 mb-2">Zalo: Hiển</span>
                    <span className="text-slate-400 font-black uppercase tracking-[0.3em] text-xs">Chat 1:1 báo giá</span>
                  </a>
                </div>
                <div className="mt-16 text-slate-400 font-[900] uppercase tracking-[0.5em] text-[10px]">
                  Online • Remote • Full-time • Nationwide
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="mb-12 flex items-center gap-3">
             <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
               <span className="text-white font-black text-2xl">H</span>
             </div>
             <div className="text-left">
               <span className="text-2xl font-black text-white tracking-tight uppercase block">ĐOÀN ĐÌNH HIỂN</span>
               <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">Digital Nomad Portfolio</span>
             </div>
          </div>
          <p className="text-lg max-w-xl mb-12 font-medium leading-relaxed opacity-60">
            Cung cấp giải pháp tiếp thị và hạ tầng web chuyên sâu giúp SME vượt qua rào cản kỹ thuật để tăng trưởng bền vững.
          </p>
          <div className="flex flex-wrap justify-center gap-12 text-sm font-black text-slate-400 uppercase tracking-widest mb-16">
            <a href="mailto:hiendoanvan25@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="https://zalo.me/0943304685" className="hover:text-white transition-colors">Zalo</a>
            <a href="#portfolio" onClick={(e) => handleNavClick(e, '#portfolio')} className="hover:text-white transition-colors">Portfolio</a>
          </div>
          <div className="w-full h-px bg-white/5 mb-16"></div>
          <p className="text-[10px] font-black tracking-[0.5em] opacity-30 uppercase">
            &copy; {new Date().getFullYear()} Đình Hiển. Built for Growth.
          </p>
        </div>
      </footer>
      
      {/* Scroll to Top / Floating Zalo */}
      <a 
        href="https://zalo.me/0943304685" 
        className="fixed bottom-10 right-10 z-[110] bg-blue-600 text-white p-6 rounded-[2rem] shadow-3xl shadow-blue-400/50 md:hidden hover:scale-110 active:scale-90 transition-all animate-float"
        target="_blank"
      >
        <Smartphone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default App;
