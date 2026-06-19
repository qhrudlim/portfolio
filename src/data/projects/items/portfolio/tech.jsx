import { 
  SiReact, SiVite, SiCss, SiGithubactions, SiGithubpages, SiGitlab
} from 'react-icons/si';

export const portfolioTech = {
    grouped: [
      {
        category: 'Frontend',
        items: [
          { name: 'React', icon: <SiReact color="#61DAFB" />, myTech: true },
          { name: 'Vite', icon: <SiVite color="#646CFF" />, myTech: true },
          { name: 'CSS', icon: <SiCss color="#1572B6" />, myTech: true }
        ]
      },
      {
        category: 'DevOps & Infra',
        items: [
          { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" />, myTech: true },
          { name: 'GitHub Pages', icon: <SiGithubpages color="#222222" />, myTech: true },
          { name: 'GitLab (Origin Issue Debugging)', icon: <SiGitlab color="#FC6D26" />, myTech: true }
        ]
      }
    ]
  };
