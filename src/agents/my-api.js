export async function saveForLater( person ) {

    const resp = await fetch( "http://localhost:3001/for-later", {

        body: JSON.stringify( person ),
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        mode: "cors"

    } );
    if ( !resp.ok ) { throw new Error( "Save failed :(" ); }
}

export async function fetchForLater() {

    const resp = await fetch( "http://localhost:3001/for-later" );
    if ( !resp.ok ) { throw new Error( "Save failed :(" ); }
    const json = await resp.json();
    return json;

}