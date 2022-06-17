import useAuthentication from '../../hooks/api/useAuthentication';

export default function () {
  const { user, isAuthenticated, authenticate } = useAuthentication();

  if (!isAuthenticated) {
    return (
      <h1>Not Authenticated</h1>
    );
  }

  return <h1>Hello</h1>
}
