// Function to upload an HTML file and add it to a specific container
function loadComponent(url, containerId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el componente:', error);
        });
}
loadComponent('../components/footer.html', 'footer');
loadComponent('../components/navbar.html', 'navbar');
loadComponent('../components/head-links.html', 'head-links');