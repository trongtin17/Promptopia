'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"
import { useSearchParams } from "next/navigation"

const OtherProfile = ({ params }) => {
  const router = useRouter();
  const serachParams = useSearchParams();
  const userName = serachParams.get("name");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setPosts(data);
    }

    if (params?.id) fetchPost();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName} profile`}
      data={posts}
    />
  )
}

export default OtherProfile;