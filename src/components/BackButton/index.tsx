import { useRouter } from "next/router"

import { Button } from "@/components/ui/button"

export default function BackButton(){
  const router = useRouter();

  return(
    <Button onClick={() => router.push('/')}>Go Back</Button>
  )
}