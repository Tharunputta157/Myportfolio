# Portfolio Website

This is a modern React portfolio website for Tharun Putta, a Full Stack Developer with 5+ years of experience building scalable, responsive, and high-performance applications using React.js, Node.js, MySQL, and AWS.

## 🗺️ Architecture Diagram (Beginner Friendly)

```mermaid
graph TD
    A[User's Browser]
    B[Vite Dev Server]
    C[React Frontend]
    D[Component: Header]
    E[Component: Summary]
    F[Component: Skills]
    G[Component: Experiences]
    H[Component: Projects]
    I[Component: Education]
    J[Component: Contact]
    K[CSS Modules]
    L[Node.js Backend (for future API integration)]
    M[MySQL Database (for future API integration)]
    N[AWS (for future deployment)]

    A -->|HTTP| B
    B --> C
    C --> D
    C --> E
    C --> F
    C --> G
    C --> H
    C --> I
    C --> J
    C --> K
    L -.-> M
    C -.-> L
    B -.-> N
```

- **User's Browser**: Where your portfolio is viewed.
- **Vite Dev Server**: Fast local development server.
- **React Frontend**: Main app, built with modular components.
- **Components**: Header, Summary, Skills, Experiences, Projects, Education, Contact.
- **CSS Modules**: Each component has its own modern CSS.
- **Node.js, MySQL, AWS**: Shown for future backend/API/deployment expansion.

## Summary
Full Stack Developer with 5+ years of experience building scalable, responsive, and high-performance applications using React.js, Node.js, MySQL, and AWS. Skilled at developing end-to-end features, integrating APIs, and optimizing database performance. Experienced in Agile environments, collaborating with product and UX teams, and deploying applications on AWS cloud for security and scalability.

## Getting Started

1. **Install dependencies:**
   ```powershell
   npm install
   ```
2. **Run the development server:**
   ```powershell
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser to view your portfolio.

## Customization
- Update your skills, experiences, projects, and contact info in the files under `src/components/`.
- Edit styles in the corresponding `.css` files for each component.

## Project Structure
- `src/components/Skills.jsx` — Skills section
- `src/components/Experiences.jsx` — Work Experience section
- `src/components/Projects.jsx` — Projects section
- `src/components/Contact.jsx` — Contact info section

---

Feel free to personalize the content and design to make it your own!
