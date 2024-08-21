'use client'
import { useRouter, useParams } from 'next/navigation'

const TutorPage = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <div>
      Tutor Page { params.id } 
    </div>
  );
}

export default TutorPage;