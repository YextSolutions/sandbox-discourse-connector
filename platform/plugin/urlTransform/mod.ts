declare var domain: string;

export function fix_avatar_template(avatar_url: string) {
    let re = /,\//gi
    let re2 = /^\//gi
    let httpRegex = /https?:\/\/|\/.*/gi
    var sanitizedDomainHost = "https://" + domain.replace(httpRegex, '')
    return avatar_url.replace(re, "," + sanitizedDomainHost + "/").replace(re2, sanitizedDomainHost + "/")
}