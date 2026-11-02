export interface ErzurumHub {
  id: string;
  name: string;
  district: string;
  title: string;
  role: string;
  x: number;
  y: number;
  isMainHub?: boolean;
  status: string;
  membersCount: string;
  activeBootcamps: number;
  altitude: string;
  description: string;
  technologies: string[];
  type: 'campus' | 'r&d' | 'summit' | 'science' | 'observatory';
}

export interface DistrictMarker {
  id: string;
  name: string;
  x: number;
  y: number;
}

export const erzurumHubs: ErzurumHub[] = [
  {
    id: 'ataturk-uni',
    name: 'Atatürk Üniversitesi',
    district: 'Yakutiye',
    title: 'HSD Atatürk Üniversitesi (Ana Merkez)',
    role: 'Topluluk Genel Merkezi & Mühendislik Fakültesi',
    x: 811,
    y: 147,
    isMainHub: true,
    status: 'Aktif Bootcamp & İnovasyon Üssü',
    membersCount: '1,850+ Kayıtlı Üye',
    activeBootcamps: 4,
    altitude: '1,890 m',
    description:
      'Doğu Anadolu’nun en köklü ve güçlü teknoloji ekosisteminde; HarmonyOS, Huawei Cloud ve Ascend AI alanlarında haftalık atölyeler, eğitimler ve yarışmalar düzenliyoruz.',
    technologies: ['HarmonyOS', 'HMS Core', 'Huawei Cloud', 'Ascend AI'],
    type: 'campus',
  },
  {
    id: 'ata-teknokent',
    name: 'ATA Teknokent',
    district: 'Yakutiye / Kampüs',
    title: 'ATA Teknokent Ar-Ge & Kuluçka',
    role: 'Yazılım Girişimciliği & Huawei Cloud Lab',
    x: 805,
    y: 151,
    status: 'Aktif Kuluçka & Startup Merkezi',
    membersCount: '80+ Teknoloji Şirketi',
    activeBootcamps: 2,
    altitude: '1,875 m',
    description:
      'Öğrenci ve mezun geliştiricilerin fikirlerini ticarileştirdiği kuluçka merkezi. Huawei Spark girişimcilik desteği ve bulut altyapısı mentorluğu ile projeler hayata geçiyor.',
    technologies: ['Huawei Cloud', 'DevOps', 'Microservices', 'Spark Programı'],
    type: 'r&d',
  },
  {
    id: 'palandoken-ai',
    name: 'Palandöken Zirvesi',
    district: 'Palandöken',
    title: 'Palandöken AI & Tech Summit Hub',
    role: 'Kış Hackathonu & Büyük Veri Zirvesi',
    x: 815,
    y: 161,
    status: 'Yıllık Hackathon & Zirve Noktası',
    membersCount: '500+ Zirve Katılımcısı',
    activeBootcamps: 1,
    altitude: '3,176 m',
    description:
      'Türkiye’nin en yüksek rakımlı teknoloji buluşması! Kar ve kış şartlarında Doğu Anadolu AI Summit, açık hava kodlama kampları ve hackathonlara ev sahipliği yapar.',
    technologies: ['Ascend AI', 'MindSpore', 'Computer Vision', 'Deep Learning'],
    type: 'summit',
  },
  {
    id: 'bilim-erzurum',
    name: 'Bilim Erzurum',
    district: 'Yakutiye',
    title: 'Bilim Erzurum & Deneyap Atölyesi',
    role: 'Yeni Nesil Kodlama & Genç Yetenek Geliştirme',
    x: 814,
    y: 139,
    status: 'Haftalık Uygulamalı Atölyeler',
    membersCount: '350+ Genç Kodlayıcı',
    activeBootcamps: 2,
    altitude: '1,900 m',
    description:
      'T3 Vakfı ve Erzurum Büyükşehir Belediyesi ortaklığında genç geliştiricilere temel algoritma, mobil uygulama geliştirme ve gömülü sistemler eğitimleri veriyoruz.',
    technologies: ['IoT', 'Python', 'Robotik Kodlama', 'OpenEuler'],
    type: 'science',
  },
  {
    id: 'dag-gozlemevi',
    name: 'DAG Gözlemevi',
    district: 'Karakaya Tepesi',
    title: 'Doğu Anadolu Gözlemevi (DAG)',
    role: 'Büyük Veri Analitiği & Uzay Bilişimi',
    x: 827,
    y: 157,
    status: 'Bilimsel Veri İşleme Merkezi',
    membersCount: 'Akademik Araştırma Ekibi',
    activeBootcamps: 1,
    altitude: '3,170 m',
    description:
      'Avrupa’nın en büyük 4 metre çaplı optik ve kızılötesi teleskobunda toplanan devasa astronomi verilerini işlemek için yapay zeka ve HPC algoritmaları kullanılıyor.',
    technologies: ['Big Data', 'Görüntü İşleme', 'Yüksek Başarımlı Hesaplama (HPC)'],
    type: 'observatory',
  },
];

export const districtLabels: DistrictMarker[] = [
  { id: 'yakutiye', name: 'Yakutiye', x: 809, y: 144 },
  { id: 'palandoken', name: 'Palandöken', x: 817, y: 155 },
  { id: 'aziziye', name: 'Aziziye', x: 798, y: 148 },
  { id: 'pasinler', name: 'Pasinler', x: 828, y: 146 },
  { id: 'oltu', name: 'Oltu', x: 838, y: 116 },
  { id: 'ispir', name: 'İspir', x: 778, y: 116 },
  { id: 'tortum', name: 'Tortum', x: 818, y: 124 },
  { id: 'hinis', name: 'Hınıs', x: 844, y: 194 },
  { id: 'askale', name: 'Aşkale', x: 782, y: 148 },
  { id: 'horasan', name: 'Horasan', x: 848, y: 146 },
];
