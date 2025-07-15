import { Tag, Users, Mail, HomeIcon, NewspaperIcon } from 'lucide-react';
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";

export const navigationLinks = [
    { href: '/beranda', label: 'Beranda', icon: <HomeIcon/> },
    { href: '/', label: 'Blog', icon: <NewspaperIcon/> },
    { href: '/beranda#pricing', label: 'Harga', icon: <Tag /> },
    { href: '/beranda#about', label: 'Tentang', icon: <Users /> },
    { href: '/beranda#contact', label: 'Kontak', icon: <Mail /> },
];

export const footerNavLinks = {
    "Produk": {
        home: { href: "/", label: "Beranda" },
        features: { href: "/beranda#features", label: "Fitur" },
        pricing: { href: "/beranda#pricing", label: "Harga" },
    },
    "Perusahaan": {
        about: { href: "/beranda#about", label: "Tentang Kami" },
        contact: { href: "/beranda#contact", label: "Kontak" },
        careers: { href: "#", label: "Karir" },
    },
    "Sumber Daya": {
        docs: { href: "#", label: "Dokumentasi" },
        blog: { href: "/#", label: "Blog" },
        support: { href: "#", label: "Dukungan" },
    },
};

export const socialLinks = [
    { href: "https://github.com/novbytes", icon: FaGithub, label: "GitHub" },
    { href: "https://x.com", icon: FaXTwitter, label: "X (Twitter)" },
    { href: "https://linkedin.com/codesigmax", icon: FaLinkedin, label: "LinkedIn" },
];