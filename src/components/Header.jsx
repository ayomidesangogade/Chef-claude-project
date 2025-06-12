import ChefClaude from "../images/chef-claude-icon.png"

function Header() {
    return (
        <header>
            <img src={ChefClaude} alt="chef claude" />
            <h1>Chef Claude</h1>
        </header>
    )
}

export default Header