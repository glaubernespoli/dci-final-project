class ProfileController {
  getLoggedUser = (req, res) => res.json('protected!');
}

const profileController = new ProfileController();
export default profileController;
