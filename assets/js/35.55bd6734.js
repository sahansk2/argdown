(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{407:function(t,s,a){"use strict";a.r(s);var n=a(46),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"loading-custom-plugins-in-a-config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-custom-plugins-in-a-config-file"}},[t._v("#")]),t._v(" Loading custom plugins in a config file")]),t._v(" "),a("p",[t._v("Now let's add our toy plugin from the "),a("RouterLink",{attrs:{to:"/guide/writing-custom-plugins.html"}},[t._v("previous section")]),t._v(" into Argdown and run it. We can use an "),a("code",[t._v("argdown.config.js")]),t._v(" file for that (Read the guide on configuration for more information on "),a("a",{attrs:{href:"/guide/running-custom-processes"}},[t._v("how to run custom processes")]),t._v("):")],1),t._v(" "),a("div",{staticClass:"language-Javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("SaysWhoPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@argdown/core"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SaysWhoPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" processor"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add-proponents"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    processes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"says-who-map"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We could add additional configuration settings here.")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// But currently we only want to define our process here:")]),t._v("\n            process"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load-file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loads Argdown files (request.input)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"parse-input"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// parses them (response.ast)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build-model"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// builds the data model (response.arguments, response.statements...)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build-map"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// creates the map (response.map)")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add-proponents"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// our new processor with the SaysWhoPlugin")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export-dot"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exports the map into dot format")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"export-svg"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exports the dot file into svg format")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("What is crucial for our plugin is that we insert it in the process after the map has been created, because we want to change the created nodes. This is why the "),a("code",[t._v("add-proponents")]),t._v(" processor is added after the "),a("code",[t._v("build-map")]),t._v(" processor.")]),t._v(" "),a("p",[t._v("Let us create a little test debate:")]),t._v(" "),a("figure",{staticClass:"argdown-figure",attrs:{role:"group"}},[a("argdown-map",{attrs:{"initial-view":"source"}},[a("div",{attrs:{slot:"source"},slot:"source"},[a("pre",{staticClass:"language-argdown"},[a("code",{staticClass:"language-argdown"},[a("span",{staticClass:"hljs-section"},[t._v("# Section 1")]),t._v("\n\n"),a("span",{staticClass:"hljs-argument-title"},[t._v("<a>:")]),t._v(" Quack! "),a("span",{staticClass:"hljs-meta"},[t._v("{proponent: Donald Duck}")]),t._v("\n"),a("span",{staticClass:"hljs-attack"},[t._v("    -")]),t._v(" "),a("span",{staticClass:"hljs-argument-title"},[t._v("<b>")]),t._v("\n"),a("span",{staticClass:"hljs-support"},[t._v("    +")]),t._v(" "),a("span",{staticClass:"hljs-argument-title"},[t._v("<c>")]),t._v("\n\n"),a("span",{staticClass:"hljs-section"},[t._v("## Section 2")]),t._v("\n\n"),a("span",{staticClass:"hljs-argument-title"},[t._v("<b>:")]),t._v(" D'oh! "),a("span",{staticClass:"hljs-meta"},[t._v("{proponent: Homer Simpson}")]),t._v("\n\n"),a("span",{staticClass:"hljs-argument-title"},[t._v("<c>:")]),t._v(" Pretty, pretty, pretty, pretty good. "),a("span",{staticClass:"hljs-meta"},[t._v("{proponent: Larry David}")])])])]),a("div",{attrs:{slot:"map"},slot:"map"},[a("svg",{attrs:{width:"466pt",height:"189pt",viewBox:"0.00 0.00 466.00 188.80",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{staticClass:"graph",attrs:{id:"graph0",transform:"scale(1 1) rotate(0) translate(4 184.8)"}},[a("title",[t._v("Argument Map")]),t._v(" "),a("g",{staticClass:"cluster",attrs:{id:"clust1"}},[a("title",[t._v("cluster_1")]),t._v(" "),a("polygon",{attrs:{fill:"#dadada",stroke:"#dadada",points:"8,-8 8,-172.8 450,-172.8 450,-8 8,-8"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"203.99",y:"-158","font-family":"arial","font-size":"12.00",fill:"#000000"}},[t._v("Section 1")])]),t._v(" "),a("g",{staticClass:"cluster",attrs:{id:"clust2"}},[a("title",[t._v("cluster_2")]),t._v(" "),a("polygon",{attrs:{fill:"#bababa",stroke:"#bababa",points:"16,-16 16,-94.4 442,-94.4 442,-16 16,-16"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"203.99",y:"-79.6","font-family":"arial","font-size":"12.00",fill:"#000000"}},[t._v("Section 2")])]),t._v(" "),a("g",{staticClass:"node",attrs:{id:"node1"}},[a("title",[t._v("n0")]),t._v(" "),a("path",{attrs:{fill:"#1b9e77",stroke:"black",d:"M315,-142.4C315,-142.4 143,-142.4 143,-142.4 137,-142.4 131,-136.4 131,-130.4 131,-130.4 131,-114.4 131,-114.4 131,-108.4 137,-102.4 143,-102.4 143,-102.4 315,-102.4 315,-102.4 321,-102.4 327,-108.4 327,-114.4 327,-114.4 327,-130.4 327,-130.4 327,-136.4 321,-142.4 315,-142.4"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"226.22",y:"-128.4","font-family":"arial","font-weight":"bold","font-size":"10.00",fill:"#000000"}},[t._v("a")]),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"211.77",y:"-111.4","font-family":"arial","font-size":"10.00",fill:"#000000"}},[t._v("Quack! ")])]),t._v(" "),a("g",{staticClass:"node",attrs:{id:"node2"}},[a("title",[t._v("n1")]),t._v(" "),a("path",{attrs:{fill:"#1b9e77",stroke:"black",d:"M422,-64C422,-64 250,-64 250,-64 244,-64 238,-58 238,-52 238,-52 238,-36 238,-36 238,-30 244,-24 250,-24 250,-24 422,-24 422,-24 428,-24 434,-30 434,-36 434,-36 434,-52 434,-52 434,-58 428,-64 422,-64"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"333.22",y:"-50","font-family":"arial","font-weight":"bold","font-size":"10.00",fill:"#000000"}},[t._v("b")]),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"322.95",y:"-33","font-family":"arial","font-size":"10.00",fill:"#000000"}},[t._v("D'oh! ")])]),t._v(" "),a("g",{staticClass:"edge",attrs:{id:"edge1"}},[a("title",[t._v("n1->n0")]),t._v(" "),a("path",{attrs:{fill:"none",stroke:"#ff0000",d:"M309.28,-64.08C295.61,-73.84 278.82,-85.83 264.12,-96.32"}}),t._v(" "),a("polygon",{attrs:{fill:"#ff0000",stroke:"#ff0000",points:"261.86,-93.64 255.75,-102.3 265.93,-99.33 261.86,-93.64"}})]),t._v(" "),a("g",{staticClass:"node",attrs:{id:"node3"}},[a("title",[t._v("n2")]),t._v(" "),a("path",{attrs:{fill:"#1b9e77",stroke:"black",d:"M208,-64C208,-64 36,-64 36,-64 30,-64 24,-58 24,-52 24,-52 24,-36 24,-36 24,-30 30,-24 36,-24 36,-24 208,-24 208,-24 214,-24 220,-30 220,-36 220,-36 220,-52 220,-52 220,-58 214,-64 208,-64"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"119.5",y:"-50","font-family":"arial","font-weight":"bold","font-size":"10.00",fill:"#000000"}},[t._v("c")]),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"47.81",y:"-33","font-family":"arial","font-size":"10.00",fill:"#000000"}},[t._v("Pretty, pretty, pretty, pretty good. ")])]),t._v(" "),a("g",{staticClass:"edge",attrs:{id:"edge2"}},[a("title",[t._v("n2->n0")]),t._v(" "),a("path",{attrs:{fill:"none",stroke:"#00ff00",d:"M148.72,-64.08C162.39,-73.84 179.18,-85.83 193.88,-96.32"}}),t._v(" "),a("polygon",{attrs:{fill:"#00ff00",stroke:"#00ff00",points:"192.07,-99.33 202.25,-102.3 196.14,-93.64 192.07,-99.33"}})])])])])]),a("figcaption",[t._v("The test debate without running the SaysWhoPlugin")])],1),a("p",[t._v("We can now run our plugin with the commandline tool, assuming that the config file and our Argdown document are in the current working directory:")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("argdown run says-who-map\n")])])]),a("p",[t._v("This should create an svg file with a map where proponent names have been added:")]),t._v(" "),a("figure",{staticClass:"argdown-figure",attrs:{role:"group"}},[a("argdown-map",{attrs:{"initial-view":"map"}},[a("div",{attrs:{slot:"source"},slot:"source"},[a("pre",{staticClass:"language-argdown"},[a("code",{staticClass:"language-argdown"},[a("span",{staticClass:"hljs-section"},[t._v("# Section 1")]),t._v("\n\n"),a("span",{staticClass:"hljs-argument-title"},[t._v("<a>:")]),t._v(" Quack! "),a("span",{staticClass:"hljs-meta"},[t._v("{proponent: Donald Duck}")]),t._v("\n"),a("span",{staticClass:"hljs-attack"},[t._v("    -")]),t._v(" "),a("span",{staticClass:"hljs-argument-title"},[t._v("<b>")]),t._v("\n"),a("span",{staticClass:"hljs-support"},[t._v("    +")]),t._v(" "),a("span",{staticClass:"hljs-argument-title"},[t._v("<c>")]),t._v("\n\n"),a("span",{staticClass:"hljs-section"},[t._v("## Section 2")]),t._v("\n\n"),a("span",{staticClass:"hljs-argument-title"},[t._v("<b>:")]),t._v(" D'oh! "),a("span",{staticClass:"hljs-meta"},[t._v("{proponent: Homer Simpson}")]),t._v("\n\n"),a("span",{staticClass:"hljs-argument-title"},[t._v("<c>:")]),t._v(" Pretty, pretty, pretty, pretty good. "),a("span",{staticClass:"hljs-meta"},[t._v("{proponent: Larry David}")]),t._v("\n\n")])])]),a("div",{attrs:{slot:"map"},slot:"map"},[a("svg",{attrs:{width:"466pt",height:"201pt",viewBox:"0.00 0.00 466.00 200.80",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{staticClass:"graph",attrs:{id:"graph0",transform:"scale(1 1) rotate(0) translate(4 196.8)"}},[a("title",[t._v("Argument Map")]),t._v(" "),a("g",{staticClass:"cluster",attrs:{id:"clust1"}},[a("title",[t._v("cluster_1")]),t._v(" "),a("polygon",{attrs:{fill:"#dadada",stroke:"#dadada",points:"8,-8 8,-184.8 450,-184.8 450,-8 8,-8"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"203.99",y:"-170","font-family":"arial","font-size":"12.00",fill:"#000000"}},[t._v("Section 1")])]),t._v(" "),a("g",{staticClass:"cluster",attrs:{id:"clust2"}},[a("title",[t._v("cluster_2")]),t._v(" "),a("polygon",{attrs:{fill:"#bababa",stroke:"#bababa",points:"16,-16 16,-106.4 442,-106.4 442,-16 16,-16"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"203.99",y:"-91.6","font-family":"arial","font-size":"12.00",fill:"#000000"}},[t._v("Section 2")])]),t._v(" "),a("g",{staticClass:"node",attrs:{id:"node1"}},[a("title",[t._v("n0")]),t._v(" "),a("path",{attrs:{fill:"#1b9e77",stroke:"black",d:"M315,-154.4C315,-154.4 143,-154.4 143,-154.4 137,-154.4 131,-148.4 131,-142.4 131,-142.4 131,-126.4 131,-126.4 131,-120.4 137,-114.4 143,-114.4 143,-114.4 315,-114.4 315,-114.4 321,-114.4 327,-120.4 327,-126.4 327,-126.4 327,-142.4 327,-142.4 327,-148.4 321,-154.4 315,-154.4"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"226.22",y:"-140.4","font-family":"arial","font-weight":"bold","font-size":"10.00",fill:"#000000"}},[t._v("a")]),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"180.38",y:"-123.4","font-family":"arial","font-size":"10.00",fill:"#000000"}},[t._v("Donald Duck: Quack! ")])]),t._v(" "),a("g",{staticClass:"node",attrs:{id:"node2"}},[a("title",[t._v("n1")]),t._v(" "),a("path",{attrs:{fill:"#1b9e77",stroke:"black",d:"M422,-70C422,-70 250,-70 250,-70 244,-70 238,-64 238,-58 238,-58 238,-42 238,-42 238,-36 244,-30 250,-30 250,-30 422,-30 422,-30 428,-30 434,-36 434,-42 434,-42 434,-58 434,-58 434,-64 428,-70 422,-70"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"333.22",y:"-56","font-family":"arial","font-weight":"bold","font-size":"10.00",fill:"#000000"}},[t._v("b")]),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"284.33",y:"-39","font-family":"arial","font-size":"10.00",fill:"#000000"}},[t._v("Homer Simpson: D'oh! ")])]),t._v(" "),a("g",{staticClass:"edge",attrs:{id:"edge1"}},[a("title",[t._v("n1->n0")]),t._v(" "),a("path",{attrs:{fill:"none",stroke:"#ff0000",d:"M311.18,-70.11C296.46,-81.45 277.63,-95.95 261.71,-108.21"}}),t._v(" "),a("polygon",{attrs:{fill:"#ff0000",stroke:"#ff0000",points:"259.47,-105.52 253.68,-114.39 263.74,-111.06 259.47,-105.52"}})]),t._v(" "),a("g",{staticClass:"node",attrs:{id:"node3"}},[a("title",[t._v("n2")]),t._v(" "),a("path",{attrs:{fill:"#1b9e77",stroke:"black",d:"M208,-76C208,-76 36,-76 36,-76 30,-76 24,-70 24,-64 24,-64 24,-36 24,-36 24,-30 30,-24 36,-24 36,-24 208,-24 208,-24 214,-24 220,-30 220,-36 220,-36 220,-64 220,-64 220,-70 214,-76 208,-76"}}),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"119.5",y:"-62","font-family":"arial","font-weight":"bold","font-size":"10.00",fill:"#000000"}},[t._v("c")]),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"48.66",y:"-45","font-family":"arial","font-size":"10.00",fill:"#000000"}},[t._v("Larry David: Pretty, pretty, pretty,")]),t._v(" "),a("text",{attrs:{"text-anchor":"start",x:"92.82",y:"-33","font-family":"arial","font-size":"10.00",fill:"#000000"}},[t._v(" pretty good. ")])]),t._v(" "),a("g",{staticClass:"edge",attrs:{id:"edge2"}},[a("title",[t._v("n2->n0")]),t._v(" "),a("path",{attrs:{fill:"none",stroke:"#00ff00",d:"M154.68,-76.17C167.92,-86.36 183.16,-98.1 196.39,-108.29"}}),t._v(" "),a("polygon",{attrs:{fill:"#00ff00",stroke:"#00ff00",points:"194.27,-111.07 204.33,-114.4 198.54,-105.52 194.27,-111.07"}})])])])])]),a("figcaption",[t._v("The test debate after running the SaysWhoPlugin")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);