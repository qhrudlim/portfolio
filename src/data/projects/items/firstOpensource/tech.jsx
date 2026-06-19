import { 
  SiJavascript, SiHtml5, SiCss, SiGit, SiGithub, SiGithubactions, SiGithubpages
} from 'react-icons/si';

export const firstOpensourceTech = {
    grouped: [
      {
        category: 'Frontend Core',
        items: [
          { name: 'Vanilla JavaScript', icon: <SiJavascript color="#F7DF1E" />, myTech: true },
          { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
          { name: 'Vanilla CSS', icon: <SiCss color="#1572B6" /> }
        ]
      },
      {
        category: 'Version Control & Deployment',
        items: [
          { name: 'Git', icon: <SiGit color="#F05032" />, myTech: true },
          { name: 'GitHub Flow', icon: <SiGithub color="#181717" />, myTech: true },
          { name: 'GitHub Actions', icon: <SiGithubactions color="#2088FF" /> },
          { name: 'GitHub Pages', icon: <SiGithubpages color="#222222" /> }
        ]
      }
    ]
  };
