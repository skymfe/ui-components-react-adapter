import { Button, Typography } from "../lib";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Typography variant="h1">UI Components React Adapter</Typography>

      <div style={{ marginTop: "2rem" }}>
        <Typography variant="h2">Buttons</Typography>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outlined">Outlined Button</Button>
          <Button variant="text">Text Button</Button>
          <Button disabled>Disabled Button</Button>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <Typography variant="h2">Typography</Typography>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginTop: "1rem" }}>
          <Typography variant="h1">Heading 1</Typography>
          <Typography variant="h2">Heading 2</Typography>
          <Typography variant="h3">Heading 3</Typography>
          <Typography variant="body1">Body 1 text</Typography>
          <Typography variant="body2">Body 2 text</Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
