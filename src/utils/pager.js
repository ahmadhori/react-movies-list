export function getCurrPageData(allData, pageNumer, pageSize) {
    const Page = allData.slice(pageSize * (pageNumer - 1), pageSize * pageNumer);

    return Page;
}
