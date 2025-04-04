
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-6 border-none bg-transparent">
      <div className="container flex m-auto items-center justify-center">
        <p className="text-sm text-muted-foreground">© {currentYear} Kelechi Ukpabi. All rights reserved.</p>
      </div>
    </footer>
  )
}

