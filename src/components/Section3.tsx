import '../styling/Section.css'

export default function Section3() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "lightblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

      }}
    ><h1 style={{textAlign: "justify",padding:"4rem"}}>
      An SVG (Scalable Vector Graphics) is an XML-based file format for defining two-dimensional vector graphics. Unlike raster images such as JPEG or PNG, which are made up of pixels, SVGs use mathematical equations to describe shapes, lines, and colors. This allows SVG images to scale infinitely without losing quality, making them ideal for responsive web design. SVGs are commonly used for logos, icons, illustrations, and complex graphics that require clarity at any size. Additionally, SVGs support interactivity and animation, making them versatile for use in web applications. Developers and designers prefer SVGs for their scalability, small file size, and ability to be easily manipulated with CSS and JavaScript.
      </h1></div>
  );
}
