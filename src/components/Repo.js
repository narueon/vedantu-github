import React from "react";

export default function Repo({repo}) {
    let colors = {
        JavaScript: "yellow",
        CSS: "#563d7c",
        TypeScript: '#2b7489',
        HTML: '#e34c26',
        Python: '#3572A5',
        'C++': '#f34b7d',
        'C#' : '#178600',
        Makefile: '#427819',
        Ruby: '#701516'
    };
  return (
    <div
      style={{
        border: "1px solid rgba(0,0,0,0.2)",
        padding: 10,
        borderRadius: 5,
        minWidth: 300
      }}
    >
      <a href={repo.html_url} style={{textDecoration: 'none'}}><p>{repo.name}</p></a>
      <p style={{ color: "rgba(0,0,0,0.6)" }}>{repo.description}</p>
      <span>
        {repo.language !== null ? (
          <span style={{ marginRight: "10px" }}>
            <i
              className="ion-record"
              style={{ color: colors[repo.language] }}
            />{" "}
            {repo.language}
          </span>
        ) : null}
        {repo.stargazers_count !== 0 ? (
          <span style={{ marginRight: "10px" }}>
            <i className="ion-star" /> {repo.stargazers_count}
          </span>
        ) : null}
      </span>
    </div>
  );
}
