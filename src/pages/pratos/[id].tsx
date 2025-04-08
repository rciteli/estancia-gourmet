import { useParams } from 'next/navigation';

export default function DetalhePrato() {
  const { id } = useParams();
  // Lógica para buscar o prato pelo ID
  return <div>Detalhes do prato {id}</div>;
}