import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
      <Link href="/">Home </Link>{" "}
      <Link href="/about">About </Link> {" "}
      <Link href="/cabins">Cabins </Link>
      <Link href="/account">Account </Link>
    </div>
  )
}
