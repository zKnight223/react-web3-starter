export const getEthereum = async (): Promise<any> => {
    while(document.readyState !== "complete") {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    return (window as any)?.ethereum;
}
