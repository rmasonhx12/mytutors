//'use client'
//import { useRouter, useParams, useSearchParams, usePathname } from 'next/navigation'

const TutorPage = ({ params }) => {
  //const router = useRouter();
  //const params = useParams();
  //const searchParams = useSearchParams();
  //const pathname = usePathname();
  return (
    <div>
      Tutor Page {params.id} 
    </div>
  );
}

export default TutorPage;