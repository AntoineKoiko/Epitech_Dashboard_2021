#!/bin/bash

create_index () {
    echo "export {default} from '${1}';" >> "${2}/index.js"
    echo "index.js created at ${2}"
}

create_css () {
    touch "${2}/${1}.css"
    echo "${1}.css created at ${2}"
}

create_component_file () {
    echo "import React from 'react';

function ${1} () {
    return (
        <p>I'm ${1}</p>
    )
}

export default ${1};
" >> "${2}/${1}.js"
    echo "${1}.css created at ${2}"
}

main () {
    create_index "${1}" "${2}"
    create_css "${1}" "${2}"
    create_component_file "${1}" "${2}"
}

print_help () {
    echo "USAGE
./createComponnent componentName Path

    compoentName    Name of the component also use for file naming
    Path            Path to the directory where the file will be created"
}

if [ "$#" -ne 2 ]
then
    print_help
else
    main "${1}" "${2}"
fi

