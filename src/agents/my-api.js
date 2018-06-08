export function saveForLater( person ) {

    return fetch( "http://localhost:3001/for-later", {

        body: JSON.stringify( person ),
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        mode: "cors"

    } );

}

export function fetchForLater() {

    return fetch( "http://localhost:3001/for-later" );

}