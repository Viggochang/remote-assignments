const NavHidden = (props) => {
    return (
        <nav className="nav-hidden" style={{ display: props.display }}>
            <div className="items">
                <a href="#">Item1</a>
                <a href="#">Item2</a>
                <a href="#">Item3</a>
                <a href="#">Item4</a>
            </div>
            <div className="X" onClick={props.handleNavOff}>X</div>
        </nav>
    )
};

const NavIcon = (props) => {
    return (
        <nav className="nav-icon">
            <img src="nav-list.png" display="none" onClick={props.handleNavOn} />
        </nav>
    )
};

const NavAll = () => {
    return (
        <nav className="nav-all">
            <a href="#">item1</a>
            <a href="#">item2</a>
            <a href="#">item3</a>
            <a href="#">item4</a>
        </nav>
    )
};

class Header extends React.Component {

    render() {
        return (
            <header>
                <h2>Website Title</h2>
                <NavIcon handleNavOn={this.props.handleNavOn} />
                <NavAll />
            </header>
        );
    }
};

class Banner extends React.Component {

    state = {
        banner: "Welcome Message"
    }

    handleBanner = () => {
        this.setState(preState => {
            if (preState.banner === "Welcome Message") {
                return ({ banner: "Have a Good Time !" });
            } else {
                return ({ banner: "Welcome Message" });
            }
        })
    }

    render() {
        return (
            <div className="banner">
                <h2 onClick={this.handleBanner}>{this.state.banner}</h2>
            </div>
        );
    }
};

class Main extends React.Component {

    render() {
        return (
            <main className={this.props.mainClassName}>
                {this.props.boxId.split('').map((boxId, index) =>
                    <div className="content-box" key={index}>
                        {"Content Box " + boxId}
                    </div>
                )}
            </main>
        );
    }
}

class BoxUp extends React.Component {

    render() {
        return (
            <div className="boxUp">
                <Main mainClassName="box-1-2" boxId="12" />
                <Main mainClassName="box-3-4" boxId="34" />
            </div>
        );
    }
}

class BoxDown extends React.Component {

    render() {
        return (
            <div className="boxDown" style={{ display: this.props.displayBoxDown }}>
                <Main mainClassName="box-5-6" boxId="56" />
                <Main mainClassName="box-7-8" boxId="78" />
            </div>
        );
    }
}

const ActionButton = (props) => {
    return (
        <div className="action-button" onClick={props.handleDisplayBoxDown}>
            <div>Call to Action</div>
        </div>
    )
}

class Container extends React.Component {

    state = {
        displayBoxDown: "none"
    }

    handleDisplayBoxDown = () => {
        this.setState(preState => {
            if (preState.displayBoxDown === "none") {
                return { displayBoxDown: "flex" };
            }
            return { displayBoxDown: "none" };
        })
    }

    render() {
        return (
            <div className="container">
                <h1> Section Title </h1>
                <BoxUp />
                <ActionButton handleDisplayBoxDown={this.handleDisplayBoxDown} />
                <BoxDown displayBoxDown={this.state.displayBoxDown} />
            </div>
        );
    }
};

class App extends React.Component {

    state = {
        display: "none"
    }

    handleNavOn = () => {
        this.setState({ display: "flex" })
    }

    handleNavOff = () => {
        this.setState({ display: "none" })
    }

    render() {
        return (
            <div>
                <NavHidden display={this.state.display} handleNavOff={this.handleNavOff} />
                <Header handleNavOn={this.handleNavOn} />
                <Banner />
                <Container />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

