function toggleChat() {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer.style.display === "none" || chatContainer.style.display === "") {
        chatContainer.style.display = "block"; 
    } else {
        chatContainer.style.display = "none"; 
    }
}

function showSimuladorOperacao() {
    const existingIframeContainer = document.getElementById('simulador-operacao-container');
    if (existingIframeContainer) {
        existingIframeContainer.remove();
        document.removeEventListener('click', closeIframeOnClickOutside);
        return;
    }

    const iframeContainer = document.createElement('div');
    iframeContainer.id = 'simulador-operacao-container';
    iframeContainer.innerHTML = `
        <iframe src="https://copilotstudio.microsoft.com/environments/Default-978f5e39-48c9-42c9-80dd-415bdb8bca6c/bots/crd2d_simuladorDoVarejo2/webchat?__version__=2" frameborder="0"></iframe>
    `;
    document.body.appendChild(iframeContainer);

    document.addEventListener('click', closeIframeOnClickOutside);

    function closeIframeOnClickOutside(event) {
        if (!iframeContainer.contains(event.target)) {
            iframeContainer.remove();
            document.removeEventListener('click', closeIframeOnClickOutside);
        }
    }
}

document.getElementById('simulador-operacao-button').addEventListener('click', function(event) {
    event.stopPropagation();
    showSimuladorOperacao();
});
