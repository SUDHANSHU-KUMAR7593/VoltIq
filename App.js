import React from "react";

function App() {

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a1128",
        color: "#f5f7ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
        padding: "40px"
      }}
    >

      <div
        style={{
          textAlign: "center",
          maxWidth: "700px"
        }}
      >

        <div
          style={{
            fontSize: "5rem",
            marginBottom: "20px"
          }}
        >

          ⚡

        </div>

        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            marginBottom: "20px",
            fontWeight: 800,
            letterSpacing: "-0.04em"
          }}
        >

          VOLTIQ

        </h1>

        <p
          style={{
            color: "#97a3c6",
            fontSize: "1.1rem",
            lineHeight: 1.7,
            marginBottom: "35px"
          }}
        >

          Premium futuristic electronics
          platform powered by modern UI,
          responsive architecture,
          localStorage persistence,
          dynamic product rendering,
          and optimized shopping flows.

        </p>

        <a
          href="public/home.html"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "14px 32px",
            borderRadius: "999px",
            background: "#ffd400",
            color: "#000",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "1rem"
          }}
        >

          Enter Store

        </a>

      </div>

    </div>
  );
}

export default App;