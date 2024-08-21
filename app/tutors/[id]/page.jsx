'use client'
import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation'

const TutorPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  return (
    <div>
      Tutor Page {pathname} 
    </div>
  );
}

export default TutorPage;