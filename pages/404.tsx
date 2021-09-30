import { useRouter } from "next/router"
import { useEffect } from "react"

const Redirect404 = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace("/")
  })

  return <p>Redirecting...</p>
}

export default Redirect404
