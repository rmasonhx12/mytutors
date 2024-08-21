'use client'
import { useRouter, useParams, useSearchParams } from 'next/navigation'

const TutorPage = () => {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  return (
    <div>
      Tutor Page { searchParams.get('name') } 
    </div>
  );
}

export default TutorPage;