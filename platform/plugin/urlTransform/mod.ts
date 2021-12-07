declare var domainHost: string;

export function fix_avatar_template(avatar_url: string) {
    let re = /,\//gi
    let re2 = /^\//gi
    let httpRegex = /https?:\/\/|\/.*/gi
    var sanitizedDomainHost = "https://" + domainHost.replace(httpRegex, '')
    return avatar_url.replace(re, "," + sanitizedDomainHost + "/").replace(re2, sanitizedDomainHost + "/")
}