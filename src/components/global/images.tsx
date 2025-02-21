import { LucideProps } from "lucide-react";
import Image from "next/image";

const Images = {
    comp1: (props: LucideProps) => (
        <Image width={100} height={100} src="/images/Logo-1.png" alt="Logo 3" />
    ),
    comp2: (props: LucideProps) => (
        <Image width={100} height={100}src="/images/Logo-2.png" alt="Logo 3" />
    ),
    comp3: (props: LucideProps) => (
        <Image width={100} height={100} src="/images/Logo-3.webp" alt="Logo 3" />
    ),
    
    comp4: (props: LucideProps) => (
        <Image width={100} height={100} src="/images/Logo-1.png" alt="Logo 3" />
    ),
    comp5: (props: LucideProps) => (
        <Image width={100} height={100} src="/images/Logo-2.png" alt="Logo 3" />
    ),
    comp6: (props: LucideProps) => (
        <Image width={100} height={100} src="/images/Logo-3.webp" alt="Logo 3" />
    ),
};

export default Images;
