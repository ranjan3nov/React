export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ranjan3nov')

    return response.json();
}