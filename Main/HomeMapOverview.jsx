import React, { Component } from 'react'
import { OnMobile, AtLeastPhablet } from '../components/BreakingPoints/BreakingPoints.jsx'

export default class HomeMapOverview extends Component {

    resources = [
        { firstLine: 'Alle Tools', secondLine: 'für Alle Zwecke', thirdLine: 'zu den Tools', link: '#' },
        { firstLine: 'Alle Berater', secondLine: 'innerhalb Deutschlands Sortiert nach unten aufgelisteten Kategorien', thirdLine: 'zu den Tools', link: '#' },
        { firstLine: 'Alle Anbieter', secondLine: 'innerhalb Deutschlands Sortiert nach Kategorien', thirdLine: 'zu den Anbietern', link: '#' },
    ]

    renderResources(ResourceComponent) {
        return this.resources.map((resource, i) => <ResourceComponent {...resource} key={`resource-${i}`} />)
    }

    render() {
        return (
            <div className='home-map-overview'>
                <div className="map">
                    <img src="//i.imgur.com/hsLBw8O.png" alt="" />
                </div>
                <OnMobile>
                    {this.renderResources(Mobile)}
                </OnMobile>
                <AtLeastPhablet>
                    {this.renderResources(FromMobile)}
                </AtLeastPhablet>
                 <Button />
            </div>
        )
    }

}

const Button = () => (
    <div className="row">
        <div className="small-12 medium-5 medium-offset-1 large-2 column">
            <button>Registrieren</button>
        </div>
    </div>
)


function Mobile(props) {
    const { firstLine, secondLine, thirdLine, link } = props

    return (
        <div className="row">
            <div className="resource small-12 mobile column">
                <div className="content">
                    <div className="lines small-10">
                        <h4>{firstLine}</h4>
                        <p>{secondLine}</p>
                    </div>
                    <div className="caret" />
                </div>
                <div className="border" />
            </div>
           
        </div>
    )
}


function FromMobile(props) {
    const { firstLine, secondLine, thirdLine, link } = props

    return (
        <div className="row">
            <div className="resource from-mobile medium-9 medium-offset-1 column">
                <div className="lines">
                    <h4>{firstLine}</h4>
                    <p>{secondLine}</p>
                    <div className="link">
                        <a href={link}>
                            {thirdLine}
                        </a>
                    </div>
                </div>
                <div className="pointer" />
            </div>
        </div>
    )
}