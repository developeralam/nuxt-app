export const useCart = () => {
    return useState(() => [])
}
export const useAuth = () => {
    return useState(() => ({
        isAuthenticated: false,
    }))
}
export const usePageVisitCount = () => {
    return useState(() => 0)
}
