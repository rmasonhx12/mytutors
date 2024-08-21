// Code: app/tutors/page.jsx copyright 2024 Bujisoft
'use client';
import { useRouter } from "next/navigation";
//import Link from 'next/link';

const TutorsPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>Tutors</h1>
      <button onClick={ () => router.replace('/') }> Go Home</button>
    
    </div>
  );
}

export default TutorsPage;