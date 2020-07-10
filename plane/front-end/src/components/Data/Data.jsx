import React from 'react'

const tableauRef = React.createRef();

const tableauCode = (tableauRef) => {
    tableauRef.childNodes[1].style.width = '100%'
    tableauRef.childNodes[1].style.height = (tableauRef.offsetWidth * 0.75) + 'px'
    var scriptElement = document.createElement('script')
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'
    tableauRef.insertBefore(scriptElement, tableauRef.childNodes[1])
}

class Data extends React.Component {

    componentDidMount() {
        this.render();
    }

    render() {
        return (
            <div ref={tableauRef} className='tableauPlaceholder' id='viz1594394477583' style={{ position: "relative" }}>
                <img alt=' ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;La&#47;Lavanya_Kwatra_Bixi2_TableauWork&#47;Top10StationsbyofRoundTripsGraph&#47;1_rss.png' style={{ border: "none" }} />
                <object className='tableauViz' style={{ display: "none" }}>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                    <param name='embed_code_version' value='3' />
                    <param name='site_root' value='' />
                    <param name='name' value='Lavanya_Kwatra_Bixi2_TableauWork&#47;Top10StationsbyofRoundTripsGraph' />
                    <param name='tabs' value='no' />
                    <param name='toolbar' value='yes' />
                    <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;La&#47;Lavanya_Kwatra_Bixi2_TableauWork&#47;Top10StationsbyofRoundTripsGraph&#47;1.png' />
                    <param name='animate_transition' value='yes' />
                    <param name='display_static_image' value='yes' />
                    <param name='display_spinner' value='yes' />
                    <param name='display_overlay' value='yes' />
                    <param name='display_count' value='yes' />
                    <param name='language' value='en' />
                </object>
                {
                    (!tableauRef.current) ? null : tableauCode(tableauRef.current)
                }
            </div>
        )
    }
}

export default Data;
