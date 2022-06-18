// A mock function
interface Response {
    username: string
    isAuthenticated: boolean
}
export function fetchAuthentication() {
    return new Promise<{ data: Response }>((resolve) =>
      setTimeout(() => resolve({ data: {
          username: 'batman',
          isAuthenticated: true
      } }), 500)
    );
}
  