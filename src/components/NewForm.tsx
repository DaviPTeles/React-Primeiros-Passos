export function NewForm() {
    return (
      <form action="" style={{ 
        display: "flex",
        flexDirection: "column",
        gap: "24px"}}>
        <input type="text" style={{
          border: "1px solid #3086DD",
          borderRadius: "12px",
          padding: "12px",
          opacity: "55%"
        }}/>
        <input type="text" style={{
          border: "1px solid #3086DD",
          borderRadius: "12px",
          padding: "12px",
          opacity: "55%"
        }}/>
        <button style={{
          borderRadius: "12px",
          background: "#1AC0C6",
          padding: "12px",
          height: "43px",
          cursor: "pointer"
        }}>Cadastrar</button>
      </form>
    )
  }