interface HeaderProps {
    title: string,
    size: string
  }
  
  export function Header({ title, size }: HeaderProps) {
    return (
      <header style={{
        fontWeight: 600,
        fontSize: size,
        textAlign: "center",
      }}>
        <h1>{title}</h1>
      </header>
    )
  }