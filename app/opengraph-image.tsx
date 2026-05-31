import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Dhiraj Kumar — Systems Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        position: "relative",
        display: "flex",
        background: "#050505",
        color: "#f5f5f5",
        overflow: "hidden",
        fontFamily: "Inter",
      }}
    >
      {/* Grid Background */}

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow */}

      <div
        style={{
          position: "absolute",
          right: -150,
          top: -150,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(88,242,154,.15), transparent 70%)",
        }}
      />

      {/* Content */}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          padding: "80px",
        }}
      >
        {/* Status */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "999px",
              background: "#58f29a",
            }}
          />

          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.25em",
              color: "#9ca3af",
            }}
          >
            SOFTWARE ENGINEER
          </div>
        </div>

        {/* Main Heading */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: 900,
            fontSize: 96,
            lineHeight: 0.9,
            letterSpacing: "-0.06em",
          }}
        >
          <span>Building</span>

          <span>high-performance</span>

          <span>software systems.</span>
        </div>

        {/* Bottom Row */}

        <div
          style={{
            display: "flex",
            gap: 80,
            marginTop: 70,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#222",
                fontWeight: 900,
                fontSize: 70,
                lineHeight: 1,
              }}
            >
              01
            </span>

            <span
              style={{
                marginTop: 10,
                color: "#7a7a7a",
                fontSize: 18,
              }}
            >
              Infrastructure
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#222",
                fontWeight: 900,
                fontSize: 70,
                lineHeight: 1,
              }}
            >
              02
            </span>

            <span
              style={{
                marginTop: 10,
                color: "#7a7a7a",
                fontSize: 18,
              }}
            >
              Full Stack
            </span>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "#222",
                fontWeight: 900,
                fontSize: 70,
                lineHeight: 1,
              }}
            >
              03
            </span>

            <span
              style={{
                marginTop: 10,
                color: "#7a7a7a",
                fontSize: 18,
              }}
            >
              Backend Systems
            </span>
          </div>
        </div>

        {/* Footer */}

        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 60,
            color: "#58f29a",
            fontSize: 20,
            fontWeight: 700,
          }}
        >
          dhiraj kumar
        </div>
      </div>
    </div>,
    size,
  );
}
