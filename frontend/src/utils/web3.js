import {ethers} from "ethers";

const BLOG_ADDRESS = '0x7241925dFAe027d30a0913f800AA982865F27a37';
const FILE_ADDRESS = '0x80BFB57Ff7820AccB9fCFA2c9633fFAaeEf60f62'.toLowerCase();

const FileAbi = [
    "  function getBlogList() public view returns (  " +
    "            bytes[] memory uuids,\n" +
    "            bytes[] memory titles,\n" +
    "            bytes[] memory descriptions,\n" +
    "            bytes[] memory users,\n" +
    "            bytes[] memory publishTimes,\n" +
    "            bytes[] memory covers)",
    "function getFile(bytes memory name) public view virtual returns(bytes memory blog)"
];

function hexToString(s) {
    return ethers.utils.toUtf8String(s);
}

function BlogContract() {
    const provider = new ethers.providers.JsonRpcProvider('https://galileo.web3q.io:8545');
    return new ethers.Contract(BLOG_ADDRESS, FileAbi, provider);
}

export async function getBlogList() {
    const contract = BlogContract();
    const result = await contract.getBlogList();
    const uuids = result[0];
    const titles = result[1];
    const descriptions = result[2];
    const users = result[3];
    const publishTimes = result[4];
    const covers = result[5];
    const blogList = [];
    const imageGateway = "https://" + FILE_ADDRESS + ".w3q-g.w3link.io/";
    for (let i = uuids.length - 1; i >= 0; i--) {
        const item = {
            id: uuids[i],
            title: hexToString(titles[i]),
            description: hexToString(descriptions[i]),
            user: hexToString(users[i]),
            publishTime: hexToString(publishTimes[i]),
            cover: imageGateway + hexToString(covers[i]),
        }
        blogList.push(item);
    }
    return blogList;
}

export async function getBlog(id) {
    const contract = BlogContract();
    const blog = await contract.getFile(id);
    return hexToString(blog);
}
