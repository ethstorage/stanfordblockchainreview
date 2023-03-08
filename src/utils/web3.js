import {ethers} from "ethers";

const BLOG_ADDRESS = '0xa215d1BE9260bBCa4e46FE7Cd6D556f4fE94bef1';

const FileAbi = [
    "  function getBlogList() public view returns (\n" +
    "            bytes[] memory uuids,\n" +
    "            bytes[] memory covers,\n" +
    "            bytes[] memory titles,\n" +
    "            bytes[] memory descriptions,\n" +
    "            bytes[] memory blogUrls,\n" +
    "            bytes[] memory users,\n" +
    "            bytes[] memory publishTimes\n" +
    "        )",
    "function getBlog(bytes memory name) public view virtual returns(bytes memory blog)"
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
    const covers = result[1];
    const titles = result[2];
    const descriptions = result[3];
    const blogUrls = result[4];
    const users = result[5];
    const publishTimes = result[6];
    const blogList = [];
    for (let i = uuids.length - 1; i >= 0; i--) {
        const item = {
            id: uuids[i],
            cover: hexToString(covers[i]),
            title: hexToString(titles[i]),
            description: hexToString(descriptions[i]),
            blogUrl: hexToString(blogUrls[i]),
            user: hexToString(users[i]),
            publishTime: hexToString(publishTimes[i]),
        }
        blogList.push(item);
    }
    return blogList;
}

export async function getBlog(id) {
    const contract = BlogContract();
    const blog = await contract.getBlog(id);
    console.log("javascript: '" + hexToString(blog) + "'")
    return hexToString(blog);
}
