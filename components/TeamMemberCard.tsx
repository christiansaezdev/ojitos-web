import Image from 'next/image';
import { FaUserCircle } from 'react-icons/fa';

interface TeamMemberProps {
    name: string;
    role: string;
    imageUrl?: string;
}

export default function TeamMemberCard({ name, role, imageUrl }: TeamMemberProps) {
    return (
        <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center text-gray-300 relative">
                {imageUrl ? (
                    <Image src={imageUrl} alt={name} fill className="object-cover" sizes="128px" />
                ) : (
                    <FaUserCircle className="w-full h-full" />
                )}
            </div>
            <h3 className="text-xl font-bold text-[var(--primary-purple)] text-center">{name}</h3>
            <p className="text-[var(--text-secondary)] font-medium text-center">{role}</p>
        </div>
    );
}
