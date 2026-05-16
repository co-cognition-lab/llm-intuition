# co-cognition.org 域名注册指引（Cloudflare）

> 2026-05-16 | 域名已注册 ✅ | 后续：DNS 配置 → GitHub Pages 绑定

---

## 一、为什么选 Cloudflare Registrar

- **成本价**：.org 约 $10.44/年，无加价
- **WHOIS 隐私保护**：免费（大部分注册商要额外收费）
- **DNSSEC**：免费自动配置
- **与后续网站部署天然集成**：Cloudflare Pages 免费托管静态站点，DNS 零延迟

---

## 二、注册后必做的 3 项检查

### 检查 1：确认 DNS 已激活

登录 Cloudflare Dashboard → 选择 `co-cognition.org` → **DNS** 标签页。

**不要现在就添加 DNS 记录**——等 GitHub Pages 部署时我会告诉你具体需要加什么记录。

### 检查 2：确认 SSL/TLS 模式

左侧菜单 → **SSL/TLS** → Overview。

确保加密模式设置为 **"Full (strict)"**——这样后续 GitHub Pages 的 HTTPS 才能正常工作。

> ⚠️ 不要选 "Flexible"——那会让用户到 Cloudflare 的流量加密，但 Cloudflare 到 GitHub 的流量不加密，有安全隐患。

### 检查 3：确认 DNSSEC 状态

左侧菜单 → **DNS** → Settings → DNSSEC。

应该显示为 "Enabled"。点进去确认 DS 记录已自动配置。

---

## 三、暂不动、后续再说的事项

| 事项 | 时机 | 原因 |
|------|------|------|
| **添加 A/CNAME 记录** | 网站部署后 | 需要 GitHub Pages 提供目标地址 |
| **添加 `www` 子域名重定向** | 网站部署后 | 让 `www.co-cognition.org` 也指向主站 |
| **创建子域名 `llm-intuition.co-cognition.org`** | 按需 | 如果你后续用子域名而非子目录 |

---

## 四、费用预估

| 项目 | 费用 |
|------|------|
| co-cognition.org 域名（1年） | ~$10.44 |
| Cloudflare Pages 托管 | $0（免费） |
| GitHub 仓库 | $0（免费） |
| **合计首年** | **~$10.44（约¥75）** |

---

*有问题随时打断。*
