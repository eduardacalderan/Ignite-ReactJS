interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      {/* recebe o valor name de repository que está no RepositoryItem no RepositoryList. SE ELE ESTIVER VAZIO, RECEBE DEFAULT */}
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Access the repository</a>
    </li>
  );
}
