#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ProtoChatRequest {
    #[prost(enumeration = "Request", repeated, tag = "1")]
    pub requests: ::prost::alloc::vec::Vec<i32>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ProtoChatMessage {
    #[prost(string, optional, tag = "1")]
    pub user_message: ::core::option::Option<::prost::alloc::string::String>,
}
#[allow(clippy::derive_partial_eq_without_eq)]
#[derive(Clone, PartialEq, ::prost::Message)]
pub struct ProtoChatHistory {
    #[prost(message, repeated, tag = "1")]
    pub history: ::prost::alloc::vec::Vec<ProtoChatMessage>,
}
#[derive(Clone, Copy, Debug, PartialEq, Eq, Hash, PartialOrd, Ord, ::prost::Enumeration)]
#[repr(i32)]
pub enum Request {
    History = 0,
}
impl Request {
    /// String value of the enum field names used in the ProtoBuf definition.
    ///
    /// The values are not transformed in any way and thus are considered stable
    /// (if the ProtoBuf definition does not change) and safe for programmatic use.
    pub fn as_str_name(&self) -> &'static str {
        match self {
            Request::History => "History",
        }
    }
    /// Creates an enum from field names used in the ProtoBuf definition.
    pub fn from_str_name(value: &str) -> ::core::option::Option<Self> {
        match value {
            "History" => Some(Self::History),
            _ => None,
        }
    }
}
