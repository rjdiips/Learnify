export const prompts = {
  getCoursePrompt: (
    search
  ) => `Extract the main technology or topic keyword from this search query for course filtering: "${search}"

Return ONLY one keyword from this list or a closely related term:
React, Nextjs,Angular, Vue, JavaScript, TypeScript, Node.js, Python, Java, C++, PHP, Ruby, Go, Rust, Swift, Kotlin, Flutter, React Native, Android, iOS, Web Development, Frontend, Backend, Full Stack, MERN Stack, MEAN Stack, Django, Flask, Spring Boot, Machine Learning, Deep Learning, Artificial Intelligence, Data Science, Data Analysis, SQL, MongoDB, PostgreSQL, Docker, Kubernetes, DevOps, CI/CD, AWS, Azure, Google Cloud, Cloud Computing, Cybersecurity, Blockchain, UI/UX Design, Mobile Development, Game Development, Software Testing, Git, DSA, Algorithms, System Design

If the search doesn't match any category, extract the core topic as a general keyword.

Output only the keyword, nothing else:`,
};
